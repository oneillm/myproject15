class CreateProjecttbls < ActiveRecord::Migration
  def change
    create_table :projecttbls do |t|
      t.string :ProjectID
      t.string :Description
      t.string :URL

      t.timestamps
    end
  end
end
