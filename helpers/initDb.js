import db from 'mongoose';

//adminadmin/adminadmin

function initDB() {
  if (db.connections[0].readyState) {
    console.log('alredy connected');
    return
  }

  db.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  });

  db.connection.on('connected', () => {
    console.log('connection to mongo');
  });

  db.connection.on('error', (error) => {
    console.log('error to mongo', error);
  });
}

export default initDB;