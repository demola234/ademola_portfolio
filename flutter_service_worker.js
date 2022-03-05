'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a4796c31519a58fa220ae8cda0e52f34",
"favicon.ico": "7c55683bc583ab00728d77d8edcd32ba",
"index.html": "b9a723643c9998234203ee68b97b12a7",
"/": "b9a723643c9998234203ee68b97b12a7",
"main.dart.js": "f069b2afe629ebb2a8d52c762588cc54",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Logo.png": "2930331c04675fb3311f4bc9695c8015",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c6e37376cd56ab2749fcd5a7f6fca7ed",
".git/config": "bb34c923ee04dea1c2ad407cdc84ad3d",
".git/objects/3b/f7aa67e626e7067d3855788f3eb13316d59700": "22799482ecdbd3ee10fae9a08af69dee",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/56/cb34b7f8bb9dfda46cb113ab3ed7677518d641": "e428c355ab4ee88e955cdd6288a897d4",
".git/objects/3d/aa0e171554db16f1b21ea4b3e66e573822b331": "de1dc4988d0372a5208cf5ee5f2a817c",
".git/objects/5f/19af48e4a37685489ef4f5516694c40cac51d1": "552533412cb303b7cb693ce582a0787e",
".git/objects/05/559ec80f5575b14852d5400704d4fcad874cc8": "0b35d971d4a008440e11114a66b0963e",
".git/objects/a4/081046c0567603ce3b5e2349adcd976e7e7611": "f3a7b5ec89211c0af86ab1da28c23ba0",
".git/objects/b2/82d94a1f7e85f577ffa32c044c7f11d0628201": "c8a64555d668e538be39167463891fde",
".git/objects/b4/6b5240a7cebd02e3ae2f82e05c2070d706adef": "3287a343a3cc897edcc853615e443b45",
".git/objects/d1/a2ac21ec24fabe2e884c28b75ac41381b955b5": "c245bbd6ed0e9b64b64c3cb0d9d733bc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/cf/100c54fdbdffe5843e66c56e76b30c5eb8b0ec": "95250bea525df6233730bc9a4b81e504",
".git/objects/c1/3a14d08b94e1ac7e00dfc341ab662da2fdc327": "ed116a0f0a725b1a74b8ae3f6680443b",
".git/objects/7c/5884ad0201afe8a3d2bd43dc33d0576c19d0df": "57cc9b0edbac328db56d6518815d6851",
".git/objects/1a/cb64ca867eaeaecd0d0cbe5748a574c46af9d7": "f9f6ea6cdd926a71a8a68c2731489891",
".git/objects/28/e5c1bcf40020c30acbf4f963c3c7febb350cb1": "637a09510d8d6fb54a13558f5fd18c3f",
".git/objects/17/5f6c31f1e76842e23dd68bcb6573ebda670328": "ca9a23c913a055d615ce7060a9447667",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/546148fb5b0559513443443c27d5e1de698c22": "c8258c04ebd0dc83868c39e8b8bec216",
".git/objects/2f/9a7cac96cadb44dd35cd1ae8596e006578af1c": "f3aa6cec2107c98bb7e61d10fe2f5da2",
".git/objects/2f/062aeaa2cc397d6cf66e78ca2b937d76f4a0eb": "b379bfc589240554adae3c37aa23e737",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/4b3297c9b78137fdcbda0b756c27769ec83aa7": "6ab9fbe4f437bda6c0c6e80afb9505ca",
".git/objects/5c/61aaba3cc3bd3670a7b5e160865db2ad7bd118": "1342122d127c3cb2d5cfb129e11cb366",
".git/objects/5c/e355c26d51fb8041b2f420656324ccb555d011": "7341bb855cb5a6bebd3c517d8c417cd3",
".git/objects/96/ce97efc0c13b33b28f7f0c4945dfe32b2777f2": "a2a2d5c08ac9dd55ad000e87b2cd681c",
".git/objects/54/e77c2661b40f7bced315c692cb08536c6b71f6": "d5db38d1e1db6ad1d7d503e12dde74f8",
".git/objects/3f/5657a3de3398e3863de4cefdcbac15c1c29d68": "e0102ad78fd0ea235832cc63353badf0",
".git/objects/37/dc958726fbcbe0b98599cfd2ba24d707e79f0f": "be5888d7eb5c33d8ba2dd798816a1526",
".git/objects/37/32eae7b1c8e28e07399dcac31242892fb78d86": "b67c353c00875333e3f744302a22e810",
".git/objects/0f/9591bb461a89bd814aa60a3f036c257302d2ad": "0f4d9efa5e11e6908fdd3b4c71943748",
".git/objects/64/ff3d2443f1d3e6c7e06b93d5dfcd94ceb34175": "6c746f88341d7de33561ddc8dfc1c0bf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/a61a153cdf3e9866f50e02b7e615d89b9948d1": "a3dd55e364b4d991fa14e68abc34b010",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/23/f9110b1a05b36d31e47cdf9376ebb5573fbd5c": "3428021322fe31697c29d7288a406ebb",
".git/objects/4f/f5d654d3f405816cbe1913c1dea1596f6ab03b": "e9d20670e40dce0beda683907d2a61b6",
".git/objects/12/1c05119a647715203ef71bcff9ff1e93797388": "3e3050225e26e53d7378dceea889283f",
".git/objects/85/447ef51eae10eca298eb4167cbc75199efc40a": "2bf2529b4058b4ddd40baf5931f13a3d",
".git/objects/1d/b51758481085c56fdb9a5563a3f8a443309ed9": "821de36c87cbae6767882302f59d3863",
".git/objects/40/52777caff180a39c6889ac9c99b9f5f8398143": "54459a144e8b65ee49ea28d7e2599aae",
".git/objects/13/dbca231a23c28a89d179a465b888e169638d1f": "a603f2ea1e57ff026a4745c1b807d61c",
".git/objects/14/d798bcb6cde6c3f484aa1eba50fac52031e672": "32c6d294fb5ea87f4f6dc0b58ca0894e",
".git/objects/8e/f854ed266361e48411f7bcc7c56609d604ed98": "1359bb9582d8dee7e101e20030bd4d1e",
".git/objects/22/239187fcf4741592170a342a0c2e8e033ca6cc": "0a60901c6e320238e911f6ade782dd87",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1b40f68f971fe270bb2f9760e9492902",
".git/logs/refs/heads/main": "22272913dc51450061ba02a0b660af25",
".git/logs/refs/remotes/origin/main": "6403155f8ab368748412d6bf33a7a3bc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "74e9c87ab63c977b928435623e7a1a62",
".git/refs/remotes/origin/main": "74e9c87ab63c977b928435623e7a1a62",
".git/index": "05da3753bbe417ac122a460c50645172",
".git/COMMIT_EDITMSG": "95aa7abdd5948a6f13fdd63ac58e4861",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/NOTICES": "a357d7676c039d860bc9822c03ea46cf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
