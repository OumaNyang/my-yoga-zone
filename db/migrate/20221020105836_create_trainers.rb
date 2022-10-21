class CreateTrainers < ActiveRecord::Migration[7.0]
  def change
    create_table :trainers do |t|
      t.string :name
      t.string :email
      t.string :address

      t.timestamps
    end
  end
end
