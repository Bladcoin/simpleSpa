<template>
  <div class="main-index__form__group form-group">
    <label for="">{{ label }}</label>
    <div class="__select" :data-state="`${open ? 'active' : ''}`">
      <div
        class="__select__title"
        data-default="Option 0"
        v-on:click="openOrCloseSelect()"
      >
        {{ title }}
      </div>
      <div class="__select__content">
        <template v-for="(option, index) in data" :value="option">
          <input class="__select__input" type="radio" />

          <label class="__select__label" v-on:click="optionsChange(option)">{{
            option.name
          }}</label>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      data: "",
      title: "",
      open: false,
      mutations: "",
      relative: false,
      getter: false,
      label:'',
    };
  },
  computed: {
    ...mapGetters({
      local: "getLocal",
      try: "getTry",
      timespent: "getTimespent",
      type: "getTypes",
    }),
  },
  created() {
    this.label = this.$attrs.label;
    this.relative = this.$attrs.relative;
    if (this.relative) {
      this.data = this.$attrs.data.filter(
        (option) => option.relative === this.local
      );
    } else {
      this.data = this.$attrs.data;
    }
    this.mutations = this.$attrs.mutations;
    if (this.$attrs.getter) {
      this.getter = this.$attrs.getter;
    }
    this.title = this.data[0].name;

    this.mutations.forEach((mutation) => {
      this.$store.commit(mutation, this.data[0]);
    });
  },

  methods: {
    optionsChange(option) {
      if (this.getter) {
        const added_price = this[this.getter];
        this.$store.commit("SET_MINUS_PRICE", added_price.price);
      }
      this.title = option.name;
      this.open = false;
      this.mutations.forEach((mutation) => {
        this.$store.commit(mutation, option);
      });
    },
    openOrCloseSelect() {
      this.open = !this.open;
    },
  },

  watch: {
    local(value) {
      if (this.relative) {
        this.data = this.$attrs.data.filter(
          (option) => option.relative === this.local
        );
        let current_data = this[this.getter];
        let updated_data = this.data.find(
          (option) => option.id === current_data.id
        );
      
        this.$store.commit("SET_MINUS_PRICE", current_data.price);
        
        this.mutations.forEach((mutation) => {
          this.$store.commit(mutation, updated_data);
        });
      }
    },
  },
};
</script>

<style>
</style>