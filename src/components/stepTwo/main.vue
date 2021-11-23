<template>
  <div class="main-page main">
    <div class="container">
      <div class="main-page__title title">
        <h1>Шаг 2</h1>
      </div>

      <div class="main-page__user">
        <p>Пользователь</p>
      </div>

      <form action="#" class="main-page__form form">
        <div class="main-page__form__group form-group">
          <label for="">Имя</label>
          <input
            type="text"
            placeholder="Введите имя"
            class="main-page__form__input"
            v-model="userData.userName"
          />
        </div>

        <div class="main-page__form__group form-group">
          <label for="">Фамилия</label>
          <input
            type="text"
            placeholder="Введите фамилию"
            class="main-page__form__input"
            v-model="userData.surname"
          />
        </div>
        <!-- Блок с двумя мини блоками -->
        <div class="main-page__form__group form-group form-group-mini">
          <div class="main-page__form__block form-group-block">
            <label for="">Дата рождения</label>
            <input
              type="date"
              name=""
              id=""
              class="main-index__form__data"
              v-model="userData.dataOfBirth"
            />
          </div>
        </div>

        <div class="main-page__form__group form-group">
          <selectInput
            :data="data.citizenship"
            :mutations="['SET_СITIZENSHIP']"
            :getter="false"
            :relative="false"
            :label="'Гражданство'"
          ></selectInput>
        </div>
      </form>
      <errorModal></errorModal>
      <div class="main-page__outcome outcome">
        <div class="main-page__cost cost">
          <div class="main-page__content">
            <span>Виза</span>
            <p>Страна: Россия</p>
            <p>Вид визы: Транзитная виза</p>
          </div>

          <div class="main-page__content">
            <p>Въезд: 11.12.2019</p>
            <p>Время обработки: 3-4 рабочих дня</p>
          </div>

          <div class="main-page__cost__title cost-title">
            <p>Предварительная цена:</p>
          </div>
          <div class="main-page__cost__price price">
            <p>&#8364; {{ price }}</p>
          </div>
        </div>

        <div class="main-page__buttons">
          <button
            class="main-index__back__button button"
            v-on:click="$router.push({ name: 'home' })"
          >
            <i class="fas fa-chevron-left"></i> Назад
          </button>
          <button class="main-index__button button" v-on:click="getData()">
            Продолжить <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
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
      userData: {
        userName: "",
        surname: "",
        dataOfBirth: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      entryData: "getEntry",
      depatureData: "getDepature",
      price: "getPrice",
      end: "getEndData",
    }),
  },
  components: {
    selectInput,
    errorModal,
  },
  created() {
    if (this.price === 0) {
      return this.$router.push({ name: "home" }); // Если данных нет то возращаемся на первый шаг
    }
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
        this.$store.commit("SET_ERROR_MODAL", true);
      }
    },

    getData() {
      if (
        this.userData.userName.trim().length === 0 ||
        this.userData.surname.trim().length === 0 ||
        this.userData.dataOfBirth === ""
      ) {
        return this.$store.commit("SET_ERROR_MODAL", { active: true, message:'Поле имя, фамилия, дата рождения обязательны для заполнения'});
      }
      this.$store.commit("SET_USER_DATA", this.userData);
      this.$store.commit("SET_ERROR_MODAL", { active: true, message:'Данные были заполнены успешно!'});
      console.log( JSON.stringify( this.end ) );
    },
  },
};
</script>

<style>
</style>