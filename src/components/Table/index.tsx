import { useState, useEffect } from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { StrictModeDroppable } from '../StrictModeDroppable';
import { getLeads, IFormLeadWithStatus } from '../../services/lead';
import localforage from 'localforage';
import './style.css';

interface TableProps {
  isModalOpen: boolean;
  onRowClick: (leadId: string) => void;
} 

const Table: React.FC<TableProps> = ({ isModalOpen, onRowClick }) => {
  const [leads, setLeads] = useState<Record<string, { id: string; name: string; email: string; phone: string; }[]>>({
    'Cliente-Potencial': [],
    'Dados-Confirmados': [],
    'Analise-Lead': []
  });

  useEffect(() => {
    const fetchLeads = async () => {
      const leadsData = await getLeads();
      setLeads(leadsData);
    };

    fetchLeads();
  }, [isModalOpen]);
  
  const updateLeadStatus = async (id: string, newStatus: string) => {
    const leadsData: IFormLeadWithStatus[] = (await localforage.getItem('leads')) || [];
    const leadIndex = leadsData.findIndex(lead => lead.id === id);

    if (leadIndex !== -1) {
      leadsData[leadIndex].status = newStatus;
      await localforage.setItem('leads', leadsData);
    }
  };

  const onDragEnd = async (result: { source: any; destination: any; }) => {
    const { source, destination } = result;

    if (!destination) return;
    if (source.droppableId === destination.droppableId) {
      return;
    }

    if (
      (source.droppableId === 'Cliente-Potencial' && destination.droppableId === 'Analise-Lead') ||
      (source.droppableId === 'Dados-Confirmados' && destination.droppableId === 'Cliente-Potencial') ||
      (source.droppableId === 'Analise-Lead' && destination.droppableId !== 'Analise-Lead')
    ) {
      return;
    }

    const sourceClone = Array.from(leads[source.droppableId]);
    const destClone = Array.from(leads[destination.droppableId]);
    const [movedItem] = sourceClone.splice(source.index, 1);
    destClone.splice(destination.index, 0, movedItem);

    setLeads({
      ...leads,
      [source.droppableId]: sourceClone,
      [destination.droppableId]: destClone
    });

    let newStatus;
    switch (destination.droppableId) {
    case 'Cliente-Potencial':
      newStatus = 'potential';
      break;
    case 'Dados-Confirmados':
      newStatus = 'confirmed';
      break;
    case 'Analise-Lead':
      newStatus = 'pending';
      break;
    default:
      newStatus = 'potential';
    }
    await updateLeadStatus(movedItem.id, newStatus);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <table>
        <thead>
          <tr>
            {Object.keys(leads).map((key) => (
              <th key={key}>
                {key.replace('-', ' ')}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(leads).map((key) => (
              <StrictModeDroppable droppableId={key} key={key}>
                {(provided) => (
                  <td
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                  >
                    {leads[key].map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style
                            }}
                            onClick={() => onRowClick(item.id)}
                          >
                            <strong>{item.name}</strong>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </td>
                )}
              </StrictModeDroppable>
            ))}
          </tr>
        </tbody>
      </table>
    </DragDropContext>
  );
};


export default Table;
