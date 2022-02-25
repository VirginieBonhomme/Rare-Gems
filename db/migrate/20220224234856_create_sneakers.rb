class CreateSneakers < ActiveRecord::Migration[7.0]
  def change
    create_table :sneakers do |t|
      t.integer :how_rare
      t.string :name
      t.string :release_date
      t.integer :retail
      t.text :description
      t.text :img_url

      t.timestamps
    end
  end
end
