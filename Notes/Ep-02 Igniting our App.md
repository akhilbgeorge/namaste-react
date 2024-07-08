# Part-01
- Npm is a standard repository for all the packages.

- Package.json is a configuration for npm. It keeps a track of what version of package is installed into our system.

- Bundlers - webpack,parcel,vite,etc. This is the most important package in our project. Bundlers will bundle our app so that it can be shipped to production.

- Npm install -D parcel (D stands for dev dependency).There is dev dependency and normal dependency. Dev dependencies are using during development phase. But normal dependencies are used in production also.

- Package.lock.json contains exact version of the packages and integrity(hash).

- Charat(^) and tilda(~) in package.json. Putting charat upgrades to minor version and tilda updates to major version. It's always better to use charat.

- Nodemodules is like a database for all our dependencies in package.json.

- Transitive dependencies: Like parcel needs other dependencies. The other dependencies need others. That's why node modules file contain many files.

- If we have package.json and package.lock.json we can recreate all our node_modules.

# Part-02

- npx parcel index.html. Here parcel will create a server for us and it has given 1234 port and it's hosting our app to the server.

- npm is used to install a package.

- npx will execute the package. Here index.html is the source. Parcel basically goes to the source index.html and build a development build and it host that dev build at localhost 1234

- cdn is not a good way to bring react and react-dom in our project. so installing react as a package into our project using npm is better. so that we don't have to make a network call. It will be available in the node_modules.

  ## Parcel
  - Dev Build
  - Local Server
  - HMR - Hot Module Replacement(when saving the file, parcel automatically refreshes the browser to show the change)
  - Uses a file watching algorithm(written in c++)
  - Caching - Faster Builds
  - Image Optimization
  - Minification
  - Bundling
  - Compress
  - Consistent Hashing(hw)
  - Code Splitting(hw)
  - Differential Bundling - support older browsers
  - Beautiful Diagnostic
  - Error Handling
  - HTTPs
  - Tree Shaking - remove unused code
  - Different dev and prod build

- Parcels documentation is very easy to read.(hw)

