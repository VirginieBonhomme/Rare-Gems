class ChangeRetailToBeStringInSneakers < ActiveRecord::Migration[7.0]
  def change
    change_column :sneakers, :retail, :string
  end
end
