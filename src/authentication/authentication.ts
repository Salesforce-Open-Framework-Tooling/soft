import { Connection } from 'jsforce';

export class Authentication {
  connSfdc: Connection;
  // connOrg62 : Connection;

  constructor(conn: Connection) {
    console.log(
      "\tHello! I'm the Authentication Module! \n\tMy access token is " +
        conn.accessToken
    );
    this.connSfdc = conn;
  }

  getConnection(): Connection {
    return this.connSfdc;
  }
}
