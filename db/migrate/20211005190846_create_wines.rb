class CreateWines < ActiveRecord::Migration[6.1]
  def change
    create_table :wines do |t|
      t.string :name
      t.integer :year
      t.integer :price
      t.text :description
      t.string :img

      t.timestamps
    end
  end
end
