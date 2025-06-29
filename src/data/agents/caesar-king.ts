import { Agent } from '@/models/agent/agent.model';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineId } from '../w-engine.type';

const data: AgentData = {
    id: AgentId.CaesarKing,
    name: 'Caesar King',
    rank: Rank.S,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_2,
    attributeId: AttributeId.Physical,
    specialityId: SpecialityId.Defense,
    factionId: FactionId.SonsOfCalydon,
    signatureWEngineId: WEngineId.TusksOfFury,
};

const agent = new Agent(data);

export default agent;