import React from 'react';
/**
 * @deprecated Use the `useSlots` hook instead.
 *
 * createSlots is a factory that can create a
 *  typesafe Slots + Slot pair to use in a component definition
 *  For example: ActionList.Item uses createSlots to get a Slots wrapper
 *  + Slot component that is used by LeadingVisual, Description
 */
declare const createSlots: <SlotNames extends string>(slotNames: SlotNames[]) => {
    Slots: React.FC<{
        context?: Record<string, unknown> | undefined;
        children: (slots: { [key in SlotNames]?: React.ReactNode; }) => React.ReactNode;
    }>;
    Slot: <T>(props: {
        name: SlotNames;
        children: React.ReactNode | ((context: T) => React.ReactNode);
    }) => null;
};
export default createSlots;
//# sourceMappingURL=create-slots.d.ts.map