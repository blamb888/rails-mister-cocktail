class AddDescriptionToDoses < ActiveRecord::Migration[6.1]
  def change
    add_column :doses, :description, :text
  end
end
