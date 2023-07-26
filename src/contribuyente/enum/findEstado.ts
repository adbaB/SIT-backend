import { Estado } from '../entities/contribuyente.entity';

enum AllEstado {
  All = 'all',
}
type FindEstado = AllEstado | Estado;
const FindEstado = { ...AllEstado, ...Estado };

export { FindEstado };
