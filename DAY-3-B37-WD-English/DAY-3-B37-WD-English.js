// Q.1 - For the given JSON iterate over all for loops (for, for in, for of, forEach)

var json = [
  {
    id: "1",
    msg: "First One",
    dateTime: "26-05-2022 23:35",
    email: "first1@gmail.com",
  },
  {
    id: "2",
    msg: "Second One",
    dateTime: "26-05-2022 23:45",
    fromWho: "second1@gmail.com",
  },
];

for (var i = 0; i < json.length; i++) {
  console.log(json[i]);
}

for (let key in json) {
  console.log(json[key]);
}

for (let key of json) {
  console.log(key);
}

json.forEach((data) => console.log(data));

// Q.2 - Create your own resume data in JSON format

const resume = [
  {
    PersonalInfo: {
      Name: {
        FirstName: "SHANGEETH",
        LastName: "S S",
        Age: 24,
        FullName: this.FirstName + " " + this.LastName,
      },
      Contact: {
        State: "Tamil Nadu",
        District: "Coimbatore",
        Address: `XYZ Street,${this.District},${this.State}`,
        Mail: "shangeeth@gmail.com",
        Mobile: "97**5***78",
      },
      Education: {
        SSLC: "National Model MHSS",
        HSC: "Vidyaa Vikas Schools",
        Institute: "Kumaraguru College of Technology",
      },
      Languages: {
        Lang1: "Tamil",
        Lang2: "English",
      },
      Experience: {
        Internship: {
          Company1: {
            Name: "Makto Technology pvt",
            Place: "Coimbatore",
            State: "Tamil Nadu",
          },
          Interest: {
            Interest_1: "Reading books",
            Interest_2: "Fictional Games",
          },
          JobApplication: {
            Role: "Full-Stack Developer",
          },
        },
      },
    },
  },
];
console.log(resume);
