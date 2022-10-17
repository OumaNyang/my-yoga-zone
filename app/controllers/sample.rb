# rails g controller trainees --no-test-framework

# rails generate model trainee name username email address password_digest  trainer_id --no-test-framework

# rails generate controller trainers --no-test-framework

# rails generate model trainer name username email address password_digest --no-test-framework

# rails generate controller tutorials --no-test-framework

# rails generate model tutorials  name description url trainer_id --no-test-framework

# rails generate controller ratings --no-test-framework

# rails generate model rating  tutorial_id comment   --no-test-framework

# rails generate controller trainee_tutorials   --no-test-framework 

# rails generate model trainee_tutorials trainee_id  trainer_id   --no-test-framework 

# trainer
# ha_ many
# has_many :trainees trainer_tutorials
# has_many :tutorials  through: :trainer_tutorials

# trainees
# belongs to :trainer 

# tutorials
# belongs to :trainer 

# reviews
# belongs to :tutorial


