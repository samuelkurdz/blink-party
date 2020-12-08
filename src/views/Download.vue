<template>
  <section class="attendee-container">
    <section class="attendee">
      <vue-html2pdf
        :show-layout="true"
        :float-layout="false"
        :enable-download="true"
        :preview-modal="false"
        :paginate-elements-by-height="600"
        :filename="userDetails.userName"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a3"
        pdf-orientation="landscape"
        pdf-content-width="1400px"
        ref="html2Pdf">
        <section slot="pdf-content">
          <div class="ticket">
            <div class="ticket-text border-l border-t border-b border-gray-300" title="Dan whales">
              <h4> Hey {{userDetails.userName}}</h4>
              <p>
                Thanks for registering for the WKC bling party. This ticket can only be used by one
                participant. Your ticket is only valid for the bearer of the name above.
              </p>
              <br>
              <p>
                This ticket is not redeemable for cash or transferable to another attendee.
                There shall also be no replacement in the case of loss/theft of ticket.
              </p>
              <br>
              <h6>
                Thank you for choosing to be a part of WKC bling party.
              </h6>
              <img src="../assets/barcodes.jpg" alt="barcode">
              <h6>{{userDetails.id| parseId}}</h6>
            </div>
            <div class="ticket-image">
            </div>
          </div>
        </section>
      </vue-html2pdf>
    </section>
    <button @click="generateReport" class="btn btn-outline-primary">
      <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
      </svg>
      <span>Download</span>
    </button>
  </section>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf';

export default {
  name: 'Download',
  components: {
    VueHtml2pdf,
  },
  data() {
    return {
      afterLogIn: false,
    };
  },
  methods: {
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
  computed: {
    userDetails() {
      return this.$store.getters.userState;
    },
  },
  filters: {
    parseId(value) {
      return value.substring(1);
    },
  },
};
</script>

<style scoped lang="scss">
button {
  margin-top: 2rem;
  z-index: 50;
}
.attendee-container{
  text-align: center;
}
.attendee {
  padding: 0 0.5rem;
  margin-top: 5rem;
  text-align: center;
  font-size: 12px;
}

svg {
  fill: #061b7d;
  height: 1rem;
}

@media screen and (max-width: 1200px) {
  .attendee {
    width: 1340px;
  }
}
.ticket {
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.ticket-image {
  background-image: url('../assets/ticket.png');
  background-size: cover;
  background-position: center;
  flex-basis: 72%;
}

.ticket-text {
  padding: 15px 5px;
  border-right: 0.6px dashed #323030;
  flex-basis: 28%;
  font-size: small;
  text-align: center;

  h4 {
    text-align: left;
    font-weight: 600;
    margin-bottom: 1.2rem;
    font-size: 22px;
  }
  p {
    margin-bottom: 4px;
  }

  h6 {
    font-weight: 600;
  }
  img {
    margin: 1.5rem auto 0;
  }
}

.vue-html2pdf {
  .layout-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: -100vw;
    top: 0;
    z-index: -9999;
    background: rgba(95, 95, 95, 0.8);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    overflow: auto;
    &.show-layout {
      left: 0vw;
      z-index: 9999;
    }
    &.unset-all {
      all: unset;
      width: auto;
      height: auto;
    }
  }
  .pdf-preview {
    position: fixed;
    width: 65%;
    min-width: 600px;
    height: 80vh;
    top: 100px;
    z-index: 9999999;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    box-shadow: 0px 0px 10px #00000048;
    button {
      position: absolute;
      top: -20px;
      left: -15px;
      width: 35px;
      height: 35px;
      background: #555;
      border: 0;
      box-shadow: 0px 0px 10px #00000048;
      border-radius: 50%;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      cursor: pointer;
    }
    iframe {
      border: 0;
    }
  }
  .transition-anim-enter-active, .transition-anim-leave-active {
    transition: opacity 0.3s ease-in;
  }
  .transition-anim-enter, .transition-anim-leave-to{
    opacity: 0;
  }
}
</style>
