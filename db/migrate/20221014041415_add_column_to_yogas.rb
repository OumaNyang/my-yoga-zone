class AddColumnToYogas < ActiveRecord::Migration[6.1]
  def change
    add_column :yogas, :description, :text
  end
end
