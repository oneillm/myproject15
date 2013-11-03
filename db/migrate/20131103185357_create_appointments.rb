class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :appdate
      t.string :apptime
      t.string :appdesc

      t.timestamps
    end
  end
end
