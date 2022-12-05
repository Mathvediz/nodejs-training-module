import { Example } from "../../models/example";

export const getExamples = async (req, res) => {
  try {
    const example = await Example.findOne();
    res.send(baseMessage(example));
  } catch (e) {
    console.log(e);
    return res.status(422).send(baseMessage(null, e.toString()));
  }
}