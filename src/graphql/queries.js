import { gql } from '@apollo/client';
export const getLauches = gql`
{
  launches(limit: 20) {
    id
    mission_name
    launch_date_utc
    rocket {
      rocket_name
      rocket_type
    }
    launch_site {
      site_name
    }
    links {
      article_link
    }
  }
}
`;