Project.destroy_all
User.destroy_all

arr1 = ["cheese", "tennis", "darts"]

arr2 = ["chocolate", "soccer", "television"]

user = User.new
user.email = 'dt@ga.co'
user.save

10.times do
	Project.create(title: "#{arr1.sample} #{arr2.sample}", user_id: user.id)
end