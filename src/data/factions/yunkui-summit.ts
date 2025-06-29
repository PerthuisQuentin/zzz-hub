import { Faction } from '@/models/faction/faction.model';

import { FactionData, FactionId } from '../faction.type';

const data: FactionData = {
    id: FactionId.YunkuiSummit,
    name: 'Yunkui Summit',
};

const faction = new Faction(data);

export default faction;