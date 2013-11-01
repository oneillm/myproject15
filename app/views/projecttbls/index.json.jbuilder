json.array!(@projecttbls) do |projecttbl|
  json.extract! projecttbl, :ProjectID, :Description, :URL
  json.url projecttbl_url(projecttbl, format: :json)
end