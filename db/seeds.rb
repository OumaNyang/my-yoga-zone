5.times do
Trainer.create!( name: Faker::Name.name,
gender: Faker::Gender.type)
end

Trainee.create!( [

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 1
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 2
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 3
},
{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 4
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 5
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 6
},
{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 7
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 8
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 9
},
{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 10
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 1
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 10
},
{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 4
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 5
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 1
},
{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 7
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 9
},

{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 2
},
{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 10
},
{username: Faker::Name.name,
email: Faker::Internet.email,
password_digest: Faker::Internet.password,
yoga_id: 2
}
])



Yoga.create!( [
  {name: "Mountain Pose",
  url: "https://www.youtube.com/watch?v=v7AYKMP6rOE",
  trainer_id: 1},
  {name: "Stress Pose",
  url: "https://www.youtube.com/watch?v=hJbRpHZr_d0",
  trainer_id: 2},
  {name: "Chair Pose",
  url: "https://www.youtube.com/watch?v=g_tea8ZNk5A",
  trainer_id: 3},
  {name: "Chinese Pose",
  url: "https://www.youtube.com/watch?v=IMctZ4i2FRw",
  trainer_id: 4},
  {name: "Mantra Pose",
  url: "https://www.youtube.com/watch?v=M0uO8X3_tEA",
  trainer_id: 5},
  {name: "Love Pose",
  url: "https://www.youtube.com/watch?v=IU913YMDXCk",
  trainer_id: 6},
  {name: "Peace Pose",
  url: "https://www.youtube.com/watch?v=vG_Bs0QLc3I",
  trainer_id: 7},
  {name: "Pressure Pose",
  url: "https://www.youtube.com/watch?v=m2ya7BOVK60",
  trainer_id: 8},
  {name: "Taiwan Pose",
  url: "https://www.youtube.com/watch?v=iqcAWup2aCE",
  trainer_id: 9},
  {name: "Finish Pose",
  url: "https://www.youtube.com/watch?v=149Iac5fmoE",
  trainer_id: 10}
]
)
