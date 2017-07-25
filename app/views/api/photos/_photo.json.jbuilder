json.extract! photo, :id, :user_id, :title, :description, :image_url
json.extract! photo.user, :username

json.set! :comments do
  json.array! photo.comments do |comment|
    json.partial! 'api/comments/comment', comment: comment
  end
end
