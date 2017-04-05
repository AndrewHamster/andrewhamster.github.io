angular
    .module("app", [
    'ngMaterial',
    'youtube-embed'
])
    .controller('MyCtrl', function () {
    this.vid = 'Rykmwn0SMWU';
})
    .run(() => {
    console.log('app is ready')
})