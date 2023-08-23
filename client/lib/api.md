# // // /// /////////// For ALL ITEMS

// http://localhost:1337/api/items?populate=\*

## // // ~~~~~~~~~~~~~~~~~~~ Best Sellers

// http://localhost:1337/api/items?filters[category][$eq]=bestSellers

## // // ~~~~~~~~~~~~~~~~~~~ New Arrivals

// http://localhost:1337/api/items?filters[category][$eq]=newArrivals

// //~~~~~~~~~~~~~~~~~~~ Top Rated

// http://localhost:1337/api/items?filters[category][$eq]=topRated

// // // // // ~~~~~~~~~~~~~~~~~~~ Men

// ~~~~~~~~~~~~~~~~~~~ Fetch all Products for men

// http://localhost:1337/api/items?filters[gender]=male

// // ~~~~~~~~~~~~~~~~~~~ Best Sellers for Men

//
http://localhost:1337/api/items?filters[gender][$eq]=male&filters[category]=bestSellers

// // ~~~~~~~~~~~~~~~~~~~ New Arrivals for men

//
http://localhost:1337/api/items?filters[gender][$eq]=male&filters[category]=newArrivals

// // ~~~~~~~~~~~~~~~~~~~ Top Rated for men

//
http://localhost:1337/api/items?filters[gender][$eq]=male&filters[category]=topRated

// ~~~~~~~~~~~~~~~~~~~ Women

// ~~~~~~~~~~~~~~~~~~~ Fetch all Products for women

// http://localhost:1337/api/items?filters[gender]=female

// //~~~~~~~~~~~~~~~~~~~ Best Sellers for women

//
http://localhost:1337/api/items?filters[gender][$eq]=female&filters[category]=bestSellers

// //~~~~~~~~~~~~~~~~~~~ New Arrivals for women

//
http://localhost:1337/api/items?filters[gender][$eq]=female&filters[category]=newArrivals

// // ~~~~~~~~~~~~~~~~~~~ Top Rated for women

//
http://localhost:1337/api/items?filters[gender][$eq]=female&filters[category]=topRated
