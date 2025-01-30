import { type SchemaTypeDefinition } from 'sanity'
import product from './product';
import customer from './customer';
import orderSchema from './order';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product , customer , orderSchema ],
}
