<template>
  <div class="main-index main">
    <div class="container">
      <div class="main-index__title title">
        <h1>Шаг 1</h1>
      </div>

      <form action="#" class="main-index__form form">
        <selectInput
          :data="data.countries"
          :mutations="['SET_COUNTRIE']"
          :relative="false"
          :getter="false"
          :label="'Выберите страну'"
        ></selectInput>

        <selectInput
          :data="data.types"
          :mutations="['SET_TYPE', 'SET_PRICE']"
          :relative="false"
          :getter="'type'"
          :label="'Тип визы'"
        ></selectInput>
        <!-- Блок с двумя мини блоками -->
        <div class="main-index__form__group form-group form-group-mini">
          <div class="main-index__form__block form-group-block">
            <label for="">Въезд</label>
            <input
              type="date"
              name=""
              id=""
              class="main-index__form__data"
              v-model="entry"
            />
          </div>

          <div class="main-index__form__block form-group-block">
            <label for="">Выезд</label>
            <input
              type="date"
              name=""
              id=""
              class="main-index__form__data"
              v-model="depature"
            />
          </div>
        </div>

        <selectInput
          :data="data.try"
          :mutations="['SET_TRY', 'SET_PRICE']"
          :relative="true"
          :getter="'try'"
          :label="'Количество заездов'"
        ></selectInput>

        <selectInput
          :data="data.timespent"
          :mutations="['SET_TIMESPENT', 'SET_PRICE']"
          :relative="true"
          :getter="'timespent'"
          :label="'Время обработки'"
        ></selectInput>
      </form>

      <div class="main-index__outcome outcome">
        <div class="main-index__cost cost">
          <div class="main-index__cost__title cost-title">
            <p>Предварительная стоимость:</p>
          </div>

          <div class="main-index__cost__price price">
            <p>&#8364; {{ price }}</p>
          </div>
        </div>

        <div class="main-index__buttons">
          <button class="main-index__button button" v-on:click="checkData">
            Продолжить <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <errorModal></errorModal>
    </div>
  </div>
</template>

<script>
import data from "./data.json";
import selectInput from "../layouts/selectInputs.vue";
import errorModal from "../layouts/errorModal.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      data: data,
      entry: "",
      depature: "",
    };
  },
  computed: {
    ...mapGetters({
      entryData: "getEntry",
      depatureData: "getDepature",
      price: "getPrice",
    }),
  },
  components: {
    selectInput,
    errorModal,
  },
  created() {
    this.$store.commit('SET_PRICE_ZERO');
  }, 
  watch: {
    entry(value) {
      this.$store.commit("SET_ENTRY", this.entry);
    },
    depature(value) {
      this.$store.commit("SET_DEPATURE", this.depature);
    },
  },

  methods: {
    checkData() {
      if (this.entryData !== "" && this.depatureData !== "") {
        this.$router.push({ name: "stepTwo" });
      } else {
        this.$store.commit("SET_ERROR_MODAL", { active: true, message: 'Дата вьезда и выезда обязательна для заполнения'});
      }
    },
  },
};
</script>

<style>
</style>