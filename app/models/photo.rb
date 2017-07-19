# == Schema Information
#
# Table name: photos
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string           not null
#  image_url   :string           not null
#  user_id     :integer          not null
#  album_id    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :title, :description, :image_url, presence: true

  belongs_to :user
end