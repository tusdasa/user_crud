<template>
  <div class="container">
    <video id="player-container-id" preload="auto" playsinline webkit-playsinline></video>
  </div>
</template>

<script>
export default {
  name: "TcPlayerView",
  data() {
    return {
      player: null,
    };
  },
  created() {
    console.log("created");
  },
  beforeMount() {},
  mounted() {
    this.loadExternalJs('https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.1/libs/TXLivePlayer-1.2.0.min.js');

    this.loadExternalJs('https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.2/libs/hls.min.0.13.2m.js');

    this.loadExternalJs('https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.2/libs/flv.min.1.6.2.js');

    this.loadExternalJs('https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.2/tcplayer.v4.5.2.min.js').then(()=>{

      // eslint-disable-next-line
    this.player = new TCPlayer('player-container-id', {})

   
    // eslint-disable-next-line
    this.player.src('https://1400329073.vod2.myqcloud.com/ff439affvodcq1400329073/7a9b2b565285890804459281865/jlm6QRPE4WUA.mp4'); 

    })


    
  },
  methods: {
    loadExternalJs: function(src) {
      return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.src = src;
        document.body.appendChild(script);

        script.onload = () => {
          resolve();
        };
        script.onerror = () => {
          reject();
        };
      });
    }
  },
  components: {},
};
</script>

<style>
@import url('https://web.sdk.qcloud.com/player/tcplayer/release/v4.5.2/tcplayer.min.css');

#player-container-id{
  width:1280px;
  height: 720px;
}

</style>