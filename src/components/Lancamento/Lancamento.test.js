import Lancamento from './Lancamento'
import { MockedProvider } from '@apollo/client/testing';
import {render, screen} from '@testing-library/react';
import ListaLancamentos from './components/ListaLancamentos/ListaLancamentos';

describe('ListaLancamentos', ()=> {
    const mocks=[{
        data: {
        launches: [
            {
              "id": "56",
              "mission_name": "Paz / Starlink Demo",
              "launch_date_utc": "2018-02-22T14:17:00.000Z",
              "rocket": {
                "rocket_name": "Falcon 9",
                "rocket_type": "FT"
              },
              "launch_site": {
                "site_name": "VAFB SLC 4E",
                "site_name_long": "Vandenberg Air Force Base Space Launch Complex 4E"
              },
              "links": {
                "article_link": "https://spaceflightnow.com/2018/02/22/recycled-spacex-rocket-boosts-paz-radar-satellite-first-starlink-testbeds-into-orbit/"
              }
            }
        ]
        }
    }]

    it('should renders without error',() =>{
        render(
        <MockedProvider mocks={mocks} addTypename={false}>
            <ListaLancamentos lancamentos={mocks}/>
        </MockedProvider>
        )
    });
    it('should render ListaLancamento component', () =>{
        render(<Lancamento/>)

        expect(screen.getByTestId('listaLancamentos')).toBeInTheDocument()
    })
});