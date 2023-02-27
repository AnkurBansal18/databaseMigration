const loc = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "sales_dashboard",
  },
});
const prodd = require("knex")({
  client: "mysql",
  connection: {
    host: "clinicspots-sales.cqonsgjpiwoq.ap-south-1.rds.amazonaws.com",
    port: 3306,
    user: "master",
    password: "ClinicSpotsSales2022",
    database: "clinicspots_sales",
  },
});

// var d = new Array();
// async function test() {
//   const t = await loc("dash").insert({ id: 3 });
// }
var a;

// const pageSize = 10000;
// let page = 0; // current page number
// async function demo() {
//   a = await prodd
//     .select("int_lead_id", "txt_lead_name", "txt_lead_email", "int_contact")
// .select("city")
//     .from("lead_details")
// .from("city")
//     .offset(page * pageSize)
//     .limit(pageSize);

//   for (let i = 0; i < a.length; i++) {
//     await loc("dash").insert({
//       id: a[i].int_lead_id,
//       lead_name: a[i].txt_lead_name,
// lead_name: a[i].city,
//       lead_email: a[i].txt_lead_email,
//       lead_phone: a[i].int_contact,
//     });
//   }
//   console.log(a, a.length);
//   page++;
//   if (a.length === pageSize) {
//     // there may be more rows to fetch, so fetch the next page
//     await demo();
//   } else {
//     // we've reached the end of the table
//     console.log(`Fetched ${page * pageSize} rows from my_table`);
//   }
// }
// demo();

async function cityy() {
  a = await prodd.select("city_id").from("city");
  console.log(a.length);
  for (let i = 0; i < a.length; i++) {
    loc.select("id").from("cities").whereIn("id", a[city_id]);
    // await loc("mapped_cities").insert({ legacy_city_id: a[i].city_id });
  }
}
cityy();
console.log("done");

// for every a[i].cityid find corresponding cityid in loc.city
