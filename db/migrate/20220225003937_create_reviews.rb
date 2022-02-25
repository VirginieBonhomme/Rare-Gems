class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.integer :worth_it
      t.text :content
      t.references :user, null: false, foreign_key: true
      t.references :sneaker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
