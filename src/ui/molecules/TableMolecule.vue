<script lang="ts">
import Vue, { PropType } from 'vue';
import SearchAtom from '@/ui/atoms/SearchAtom.vue';
import { BTable, BContainer, BRow } from 'bootstrap-vue';

export interface FieldsProps {
  key: string
  sortable: boolean
  label?: string
}
export interface ItemsProps {
  id: number
  title: string
  category: string
  status: 'opened' | 'closed' | string
  date: string
}

export default Vue.extend({
  name: 'TableMolecule',
  props: {
    fields: {
      type: [] as PropType<FieldsProps[]>,
      required: true,
    },
    items: {
      type: [] as PropType<ItemsProps[]>,
      required: true,
    },
  },
  components: {
    SearchAtom,
    BContainer,
    BRow,
    BTable,
  },
  data: () => ({
    search: '',
  }),
  methods: {
    onChange(data: string): void {
      this.search = data;
    },
  },
  computed: {
    computedBySearchItems(): ItemsProps[] {
      if (this.search === '') {
        return this.items;
      }

      return this.items.filter(
        (data: ItemsProps): boolean => Object.values(data).join('').includes(this.search),
      );
    },
  },
});
</script>

<template>
  <BContainer fluid>
    <BRow sm="12" class="mx-auto">
      <SearchAtom :on-change="onChange" placeholder="Write smth here" />
    </BRow>
    <BRow sm="12">
      <BTable stripped :items="computedBySearchItems" :fields="fields"></BTable>
    </BRow>
  </BContainer>
</template>
