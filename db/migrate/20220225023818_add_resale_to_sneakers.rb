class AddResaleToSneakers < ActiveRecord::Migration[7.0]
  def change
    add_column :sneakers, :resale, :string
  end
end
