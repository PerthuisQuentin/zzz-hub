import { Agent } from '@/models/agent/agent.model';

import { AgentData, AgentId } from '../agent.type';
import { AttributeId } from '../attribute.type';
import { FactionId } from '../faction.type';
import { Rank } from '../rank.type';
import { SpecialityId } from '../speciality.type';
import { VersionId } from '../version.type';
import { WEngineId } from '../w-engine.type';

const data: AgentData = {
    id: AgentId.AlexandrinaSebastiane,
    name: 'Alexandrina Sebastiane',
    rank: Rank.S,
    isPermanent: true,
    firstVersionId: VersionId.Version_1_0,
    attributeId: AttributeId.Electric,
    specialityId: SpecialityId.Support,
    factionId: FactionId.VictoriaHousekeeping,
    signatureWEngineId: WEngineId.WeepingCradle,
};

const agent = new Agent(data);

export default agent;