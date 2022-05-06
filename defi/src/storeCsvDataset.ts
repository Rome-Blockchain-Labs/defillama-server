import allProtocols from "./protocols/data";
import craftCsvDataset from './storeTvlUtils/craftCsvDataset'
import { wrapScheduledLambda } from "./utils/shared/wrap";
import { store } from "./utils/s3";

const handler = async (_event: any) => {
  const csv = await craftCsvDataset(allProtocols, false, true);
  await store('all.csv', csv);
};

export default wrapScheduledLambda(handler);
