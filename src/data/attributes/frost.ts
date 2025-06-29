import { Attribute } from '@/models/attribute/attribute.model';

import { AttributeData, AttributeFamilyId, AttributeId } from '../attribute.type';

const data: AttributeData = {
    id: AttributeId.Frost,
    familyId: AttributeFamilyId.Ice,
    name: 'Frost',
};

const attribute = new Attribute(data);

export default attribute;