modules.define('404-block', ['i-bem-dom'], function (provide, bemDom) {

    provide(bemDom.declBlock(this.name, {
        onSetMod: {
            js: {
                inited: function () {

                }
            }
        }
    }));

});