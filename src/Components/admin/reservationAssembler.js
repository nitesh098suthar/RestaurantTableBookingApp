export const reservationAssembler = (data) => {
  const mapping = {
    t0: "Table 01",
    t1: "Table 02",
    t2: "Table 03",
    t3: "Table 04",
    t4: "Table 05",
    t5: "Table 06",
    t6: "Table 07",
    t7: "Table 08",
    t8: "Table 09",
    t9: "Table 10",
  };
  let cnt = 0,
    arr = [];
  data.forEach((item) => {
    for (let i in item) {
      if (i !== "key") {
        arr[cnt++] = {
          table: mapping[item["key"]],
          name: item[i].fname + " " + item[i].lname,
          time: item[i].startTime + " - " + item[i].endTime,
          date: item[i].date.split("T")[0],
          phoneNumber: item[i].phoneNumber,
          message: item[i].message.length > 0 ? item[i].message : "Empty",
          person: item[i].person,
          email: item[i].email,
          _id: item[i]._id,
        };
      }
    }
  });
  return arr;
};
