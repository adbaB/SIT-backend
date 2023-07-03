import { ContribuyenteService } from 'src/contribuyente/services/contribuyente.service';
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  LoadEvent,
} from 'typeorm';
import { Contribuyente } from '../contribuyente.entity';

@EventSubscriber()
export class ContribuyenteSubscriber
  implements EntitySubscriberInterface<Contribuyente>
{
  constructor(private readonly contribuyenteService: ContribuyenteService) {}
  /**
   * Indicates that this subscriber only listen to Post events.
   */
  listenTo() {
    return Contribuyente;
  }
}
