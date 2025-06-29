import { Agent } from '@/models/agent/agent.model';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineId } from '../w-engine.type';

const data: AgentData = {
    id: AgentId.Soldier0Anby,
    name: 'Soldier 0 Anby',
    rank: Rank.S,
    isPermanent: false,
    firstVersionId: VersionId.Version_1_6,
    attributeId: AttributeId.Electric,
    specialityId: SpecialityId.Attack,
    factionId: FactionId.DefenseForceSilverSquad,
    signatureWEngineId: WEngineId.SeveredInnocence,
};

const agent = new Agent(data);

export default agent;