import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

const Home: React.FC = () => {
  return (
    <div>
      <Header isLogout />
      <main>
        <div>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Idade</th>
                <th>Cidade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Marcos</td>
                <td>25</td>
                <td>Belo Horizonte</td>
              </tr>
              <tr>
                <td>Marcos</td>
                <td>25</td>
                <td>Belo Horizonte</td>
              </tr>
            </tbody>
          </table>

        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;