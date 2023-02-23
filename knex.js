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

//   console.log(t);
// }
var a;
async function demo() {
  a = await prodd
    .select("int_lead_id", "txt_lead_name", "txt_lead_email", "int_contact")
    .from("lead_details")
    .limit(10);
  for (let i = 0; i < 10; i++) {
    await loc("dash").insert({
      id: a[i].int_lead_id,
      lead_name: a[i].txt_lead_name,
      lead_email: a[i].txt_lead_email,
      lead_phone: a[i].int_contact,
    });
  }
}
demo();
// console.log(a[0].int_lead_id);
console.log("done");
// test();
