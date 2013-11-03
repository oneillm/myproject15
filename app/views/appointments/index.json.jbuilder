json.array!(@appointments) do |appointment|
  json.extract! appointment, :appdate, :apptime, :appdesc
  json.url appointment_url(appointment, format: :json)
end