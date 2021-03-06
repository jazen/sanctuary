'use strict';

var S = require ('..');

var eq = require ('./internal/eq');


test ('contramap', function() {

  eq (typeof S.contramap) ('function');
  eq (S.contramap.length) (1);
  eq (S.show (S.contramap)) ('contramap :: Contravariant f => (b -> a) -> f a -> f b');

  eq (S.contramap (S.prop ('length')) (Math.sqrt) ('Sanctuary')) (3);

});
