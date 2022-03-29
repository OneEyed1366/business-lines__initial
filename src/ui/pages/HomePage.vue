<script lang="ts">
import Vue from 'vue';
import TableMolecule, { FieldsProps, ItemsProps } from '@/ui/molecules/TableMolecule.vue';
import { BContainer } from 'bootstrap-vue';
import mockedData from '@/utils/mock-db.json';

const items: ItemsProps[] = mockedData.data.map((item): ItemsProps => ({
  ...item,
  date: new Date(item.date).toLocaleDateString(),
}));
const fields: FieldsProps[] = Object.keys(mockedData.data[0])
  .map((field: string): FieldsProps => ({
    key: field,
    sortable: true,
  }));

export default Vue.extend({
  name: 'TablePage',
  components: {
    BContainer,
    TableMolecule,
  },
  data: () => ({
    items,
    fields,
  }),
});
</script>

<template>
  <BContainer fluid>
    <TableMolecule :items="items" :fields="fields" />
  </BContainer>
</template>
