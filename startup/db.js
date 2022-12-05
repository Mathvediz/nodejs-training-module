
import { connect } from 'mongoose';

export default (app) => {
  connect(process.env.MONGODB_URL)
  .then(result => {
    console.log(`server started at ${process.env.PORT}`)
    app.listen(process.env.PORT, '0.0.0.0');
  })
  .catch(err => {
    console.log(err);
  });
}