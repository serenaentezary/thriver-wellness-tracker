class GoalSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :created_at, :goal_item
end
